import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/footer/footer.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { LocationComponent } from "src/app/location/location.component";
import { StoryComponent } from "src/app/story/story.component";
import { TimelineComponent } from "src/app/timeline/timeline.component";
import { GiftComponent } from "src/app/gift/gift.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet ,FooterComponent, HeaderComponent, LocationComponent, StoryComponent, TimelineComponent ,GiftComponent]
})
export class AppComponent  {
  title = 'ng-wedding-site';
}
