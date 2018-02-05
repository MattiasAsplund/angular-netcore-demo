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
    [Route("api/Tracks")]
    public class TracksController : Controller
    {
        private readonly Chinook_SqliteContext _context;

        public TracksController(Chinook_SqliteContext context)
        {
            _context = context;
        }

        // GET: api/Tracks
        [HttpGet]
        public IEnumerable<Track> GetTrack()
        {
            return _context.Track;
        }

        // GET: api/AlbumsByGenre
        [Route("/api/tracksbyalbum/{id}")]
        public IEnumerable<TrackViewModel> GetTracksByAlbum([FromRoute] long id)
        {
            return _context.Track
                .Include(x => x.Album)
                .ThenInclude(x => x.Artist)
                ?.Where(t => t.Album.AlbumId == id)
                .ConvertToViewModel();
        }

        // GET: api/Tracks/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTrack([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var track = await _context.Track.SingleOrDefaultAsync(m => m.TrackId == id);

            if (track == null)
            {
                return NotFound();
            }

            return Ok(track);
        }

        // PUT: api/Tracks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrack([FromRoute] long id, [FromBody] Track track)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != track.TrackId)
            {
                return BadRequest();
            }

            _context.Entry(track).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrackExists(id))
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

        // POST: api/Tracks
        [HttpPost]
        public async Task<IActionResult> PostTrack([FromBody] Track track)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Track.Add(track);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TrackExists(track.TrackId))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTrack", new { id = track.TrackId }, track);
        }

        // DELETE: api/Tracks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrack([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var track = await _context.Track.SingleOrDefaultAsync(m => m.TrackId == id);
            if (track == null)
            {
                return NotFound();
            }

            _context.Track.Remove(track);
            await _context.SaveChangesAsync();

            return Ok(track);
        }

        private bool TrackExists(long id)
        {
            return _context.Track.Any(e => e.TrackId == id);
        }
    }
}