using System;
using System.Collections.Generic;

namespace netcoreproject.Models
{
    public partial class Album
    {
        public Album()
        {
            Track = new HashSet<Track>();
        }

        public long AlbumId { get; set; }
        public string Title { get; set; }
        public long ArtistId { get; set; }

        public Artist Artist { get; set; }
        public ICollection<Track> Track { get; set; }
    }
}
