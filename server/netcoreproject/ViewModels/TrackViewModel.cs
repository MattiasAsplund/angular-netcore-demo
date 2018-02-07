using System.Collections.Generic;

namespace netcoreproject.ViewModels
{
    public class TrackViewModel
    {
        public long TrackId { get; set; }
        public string TrackName { get; set; }
        public string Composer { get; set; }
        public long Milliseconds { get; set; }
        public string ArtistName { get; set; }
    }

    public class TracksByAlbumViewModel
    {
        public long AlbumId { get; set; }
        public string AlbumName { get; set; }
        public string ArtistName { get; set; }
        public List<TrackViewModel> Tracks { get; set; }
    }
}
