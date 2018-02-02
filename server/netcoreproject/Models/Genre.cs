using System;
using System.Collections.Generic;

namespace netcoreproject.Models
{
    public partial class Genre
    {
        public Genre()
        {
            Track = new HashSet<Track>();
        }

        public long GenreId { get; set; }
        public string Name { get; set; }

        public ICollection<Track> Track { get; set; }
    }
}
