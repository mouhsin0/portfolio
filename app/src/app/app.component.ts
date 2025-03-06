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


  images = signal<string[]>(['html.png', 'css.png', 'tailwind.png' ,'js.png', 'ts.png', 'angular.png', 'node.png', 'mongo.png', 'git.png','socket.png'])


  projectsImg = signal<any[]>([

    {image: 'chat.JPG', url: 'https://chat-app-client-op0f.onrender.com/login', title: "application de chat utilisant angular node express js mongo db socket io"},
     {image: 'blog.JPG', url: 'https://blog-app-client-0eix.onrender.com/sign_in', title: 'application de blog utilisant Angular Node Express JS Mongo DB'}

  ])
}
