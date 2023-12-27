﻿    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Text.Json.Serialization;
    using System.Threading.Tasks;

    namespace Domain.Model
    {
        public class Movie_Cast : BaseEntityClass
        {
            public int MovieId {  get; set; }
            public int ActorId {  get; set; }
            public string Role { get; set; }

            [JsonIgnore]
            public Movie Movie { get; set; }
            public Actor Actor { get; set; }
        }
    }
