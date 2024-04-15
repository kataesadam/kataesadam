import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/footer/footer.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { LocationComponent } from "src/app/location/location.component";
import { TimelineComponent } from "src/app/timeline/timeline.component";
import { InfoComponent } from "src/app/info/info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet ,FooterComponent, HeaderComponent, LocationComponent, TimelineComponent ,InfoComponent]
})
export class AppComponent  {
  title = 'kata-es-adam';
}
