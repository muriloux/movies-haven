import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-radio-player',
  templateUrl: './radio-player.component.html',
  styleUrls: ['./radio-player.component.css']
})
export class RadioPlayerComponent {
  streamLink: string = 'https://classicalking.streamguys1.com/king-fm-aac-128k';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const audio = document.getElementById('radio') as HTMLAudioElement;
      audio.volume = 0.2;
    }
  }
}
