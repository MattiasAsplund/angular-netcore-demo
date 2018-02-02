using System;
using System.Collections.Generic;

namespace netcoreproject.Models
{
    public partial class Playlist
    {
        public Playlist()
        {
            PlaylistTrack = new HashSet<PlaylistTrack>();
        }

        public long PlaylistId { get; set; }
        public string Name { get; set; }

        public ICollection<PlaylistTrack> PlaylistTrack { get; set; }
    }
}
