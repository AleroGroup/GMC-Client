<template>
  <v-content>
    <v-responsive  style="height:100px;">
      <v-layout row align-start >
        <v-flex text-xs-left>
          <h3 class="headline font-weight-medium" style="color:#5C5C5C;"> Participants Curriculum Vitaes</h3>
        </v-flex>
      </v-layout>
    </v-responsive>
    <v-divider></v-divider>
    <v-layout row wrap>
       <v-hover v-slot:default="{ hover }" v-for="file in files" :key="file._id">
             <v-card
               width="300px"
               :elevation="hover ? 4 : 0.3"
               style="margin-top:2%; margin-right:2%;"
             >
              <!--<img :src="file.filename">-->
               <v-card-title primary-title>
                  <div class="headline mb-3 green--text text--darken-4">
                    {{ file.surname }} , {{ file.names }}
                  </div>
                </v-card-title>
                <v-card-text>
                  <div class="title" style="margin-top:5%">{{ file.email }}
                  </div>
                </v-card-text>
              <v-divider/>
               <v-layout row justify-center align-center>
                <v-btn block flat @click.prevent=downloadFile(file.cloudFile)>
                  <div class="blue--text text--darken-2" style="margin-right:5%;">Download</div>
                  <v-icon small color="blue darken-2">arrow_downward</v-icon>
                </v-btn>
                <v-btn @click.prevent="deleteFile(file._id)" flat>
                  <div class="red--text text--darken-2" style="margin-right:5%;">Delete</div>
                </v-btn>
                 </v-layout>
              </v-card>
           </v-hover>
    </v-layout>
    <v-layout row wrap>
    </v-layout>
  </v-content>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dash_image',
   data() {
     return {
      files: [],
       errors: '',
   }
   },

   methods: {
   //
    deleteFile(id) {
      let uri = `https://www.purplemovi.gq/files/delete/${id}`
      axios.delete(uri).then(response => {
        this.files.splice(this.files.indexOf(id), 1)
      })
    },

   /*  forceFileDownload(response){
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'file.pdf') //or any other extension
      document.body.appendChild(link)
      link.click()
    }, */

    /*  downloadFile(id) {
      let url = `http://localhost:3000/files/view/${id}`
      axios.get(
        url,
        {responseType: 'blob'}).then(response => {

         var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement('a');
          fileLink.href = fileURL;
          fileLink.setAttribute('download', 'file.pdf');
          document.body.appendChild(fileLink);
         fileLink.click();

      }).catch(() => console.log('error occured'))
    } */

 },

 created() {

     axios.get('https://www.purplemovi.gq/files/')
     .then(res => {
          console.log("data", res.data)
          this.files = res.data
     })
     .catch(err => {
       this.errors.push(err);
     })
   }

}
</script>

<style>
.input{
 border: 1px solid rgb(219, 219, 219);
 margin-top: 2%;
 height:38px;
 width: 250px;
 border-radius: 10px;
 padding: 10px;
}
.input:hover .input:focus{
  outline: none;
}
</style>
