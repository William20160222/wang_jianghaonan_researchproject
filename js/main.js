    
    const vm = new Vue({
        data:{   
            moviearea: false,
            tvarea: false,
            audioarea: false,
            substitle:false,
            

        },
        methods: {
            
            light(){
              const el = document.body;
              el.classList.toggle("changeBck");
            },

            zoom(){
              const el = document.body;

                if(el.style.zoom == "100%"){
                el.style.zoom = "200%";
                }else{
                el.style.zoom = "100%";
                }
            },

            cc(){
              this.substitle =true;
            },


           playmovie(){
                this.moviearea =true;
                this.tvarea = false;
                this.audioarea = false;
            },

            playtv(){
              this.tvarea = true;
              this.moviearea = false;
              this.audioarea == false;

          },

          playaudio(){
              this.audioarea = true;
              this.tvarea = false;
              this.moviearea = false;

          },
          
          },

    }).$mount('#app');

