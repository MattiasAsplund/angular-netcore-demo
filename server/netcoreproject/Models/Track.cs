using System;
using System.Collections.Generic;

namespace netcoreproject.Models
{
    public partial class Track
    {
        public Track()
        {
            InvoiceLine = new HashSet<InvoiceLine>();
            PlaylistTrack = new HashSet<PlaylistTrack>();
        }

        public long TrackId { get; set; }
        public string Name { get; set; }
        public long? AlbumId { get; set; }
        public long MediaTypeId { get; set; }
        public long? GenreId { get; set; }
        public string Composer { get; set; }
        public long Milliseconds { get; set; }
        public long? Bytes { get; set; }
        public string UnitPrice { get; set; }

        public Album Album { get; set; }
        public Genre Genre { get; set; }
        public MediaType MediaType { get; set; }
        public ICollection<InvoiceLine> InvoiceLine { get; set; }
        public ICollection<PlaylistTrack> PlaylistTrack { get; set; }
    }
}
