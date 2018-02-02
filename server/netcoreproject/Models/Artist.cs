using System;
using System.Collections.Generic;

namespace netcoreproject.Models
{
    public partial class Artist
    {
        public Artist()
        {
            Album = new HashSet<Album>();
        }

        public long ArtistId { get; set; }
        public string Name { get; set; }

        public ICollection<Album> Album { get; set; }
    }
}
