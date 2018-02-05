using System.Collections.Generic;
using System.Linq;
using netcoreproject.Models;

namespace netcoreproject.ViewModels.Extensions
{
    public static class ViewModelExtensions
    {
        public static List<AlbumViewModel> ConvertToViewModel(this IEnumerable<Album> albums)
        {
            return albums?.Select(x => new AlbumViewModel
            {
                AlbumId = x.AlbumId,
                Title = x.Title,
                ArtistName = x.Artist?.Name
            }).ToList();
        }

        public static List<TrackViewModel> ConvertToViewModel(this IEnumerable<Track> tracks)
        {
            return tracks?.Select(x => new TrackViewModel
            {
                TrackId = x.TrackId,
                TrackName = x.Name,
                Composer = x.Composer,
                Milliseconds = x.Milliseconds,
                ArtistName = x.Album?.Artist?.Name
            }).ToList();
        }
    }
}
