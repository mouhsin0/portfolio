import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [MatIconModule, MatCardModule, MatFormFieldModule, MatButtonModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';

  frontSkills = signal<any[]>([
    {
      name: 'HTML5', logo: 'html.png'
    },
    {
      name: 'CSS3', logo: 'css.png'
    },
    {
      name: 'TAILWIND CSS', logo: 'tailwind.png'
    },
    {
      name: 'JAVASCRIPT', logo: 'js.png'
    },
    {
      name: 'TYPESCRIPT', logo: 'ts.png'
    },
    {
      name: 'ANGULAR', logo: 'angular.png'
    }
  ])


  backendSkills = signal<any[]>([
    {
      name: 'NODE', logo: 'node.png'
    },
    {
      name: 'EXPRESS', logo: 'express.png'
    },
    {
      name: 'MONGO DB', logo: 'mongo.png'
    },
    {
      name: 'MYSQL', logo: 'mysql.png'
    },
    {
      name: 'POSTGRES', logo: 'postgres.png'
    },
    {
      name: 'GIT', logo: 'git.png'
    },
    {
      name: 'SOCKET.io', logo: 'socket.png'
    }
  ])


  projectsImg = signal<any[]>([

    {image: 'chat.JPG', url: 'https://chat-app-client-op0f.onrender.com/login', title: "application de chat utilisant angular node express js mongo db socket io"},
     {image: 'blog.JPG', url: 'https://blog-app-client-0eix.onrender.com/sign_in', title: 'application de blog utilisant Angular Node Express JS Mongo DB'}

  ])
}
