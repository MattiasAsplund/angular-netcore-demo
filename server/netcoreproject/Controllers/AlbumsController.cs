using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using netcoreproject.Models;
using netcoreproject.ViewModels;
using netcoreproject.ViewModels.Extensions;

namespace netcoreproject.Controllers
{
    [Produces("application/json")]
    [Route("api/Albums")]
    public class AlbumsController : Controller
    {
        private readonly Chinook_SqliteContext _context;

        public AlbumsController(Chinook_SqliteContext context)
        {
            _context = context;
        }

        // GET: api/Albums
        [HttpGet]
        public IEnumerable<Album> GetAlbum()
        {
            return _context.Album;
        }

        // GET: api/AlbumsByGenre
        [Route("/api/albumsbygenre/{id}")]
        public IEnumerable<AlbumViewModel> GetAlbumsByGenre([FromRoute] long id)
        {
            return _context.Album.Include(x => x.Artist)
               ?.Where(a => a.Track.Any(t => t.GenreId == id))
                .ConvertToViewModel();
        }

        // GET: api/Albums/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAlbum([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var album = await _context.Album.SingleOrDefaultAsync(m => m.AlbumId == id);

            if (album == null)
            {
                return NotFound();
            }

            return Ok(album);
        }

        // PUT: api/Albums/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAlbum([FromRoute] long id, [FromBody] Album album)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != album.AlbumId)
            {
                return BadRequest();
            }

            _context.Entry(album).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlbumExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Albums
        [HttpPost]
        public async Task<IActionResult> PostAlbum([FromBody] Album album)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Album.Add(album);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AlbumExists(album.AlbumId))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAlbum", new { id = album.AlbumId }, album);
        }

        // DELETE: api/Albums/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAlbum([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var album = await _context.Album.SingleOrDefaultAsync(m => m.AlbumId == id);
            if (album == null)
            {
                return NotFound();
            }

            _context.Album.Remove(album);
            await _context.SaveChangesAsync();

            return Ok(album);
        }

        private bool AlbumExists(long id)
        {
            return _context.Album.Any(e => e.AlbumId == id);
        }
    }
}