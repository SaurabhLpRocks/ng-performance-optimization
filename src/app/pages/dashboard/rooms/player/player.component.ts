import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { PlayerService, Track } from '../../../../@core/data/player.service';

@Component({
  selector: 'ngx-player',
  styleUrls: ['./player.component.scss'],
  templateUrl: './player.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent implements OnDestroy {
  @Input()
  @HostBinding('class.collapsed')
  collapsed: boolean;

  track: Track;
  player: HTMLAudioElement;
  shuffle: boolean;

  constructor(private playerService: PlayerService, private cdr: ChangeDetectorRef) {
    this.track = this.playerService.random();
    this.createPlayer();
  }

  ngAfterViewInit() {
    this.cdr.detach();
}

  ngOnDestroy() {
    this.player.pause();
    this.player.src = '';
    this.player.load();
  }

  prev() {
    if (!this.player.loop) {
      if (this.shuffle) {
        this.track = this.playerService.random();
      } else {
        this.track = this.playerService.prev();
      }
    }

    this.reload();
  }

  next() {
    if (!this.player.loop) {
      if (this.shuffle) {
        this.track = this.playerService.random();
      } else {
        this.track = this.playerService.next();
      }
    }

    this.reload();
  }

  playPause() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
    this.cdr.detectChanges();
  }

  toggleShuffle() {
    this.shuffle = !this.shuffle;
    this.cdr.detectChanges();
  }

  toggleLoop() {
    this.player.loop = !this.player.loop;
    this.cdr.detectChanges();
  }

  setVolume(volume: number) {
    this.player.volume = volume / 100;
    this.cdr.detectChanges();
  }

  getVolume(): number {
    return this.player.volume * 100;
    // this.cdr.detectChanges();
  }

  setProgress(duration: number) {
    this.player.currentTime = this.player.duration * duration / 100;
    this.cdr.detectChanges();
  }

  getProgress(): number {
    return this.player.currentTime / this.player.duration * 100 || 0;
    // this.cdr.detectChanges();
  }

  private createPlayer() {
    this.player = new Audio();
    this.player.onended = () => this.next();
    this.setTrack();
  }

  private reload() {
    this.setTrack();
    this.player.play();
    this.cdr.detectChanges();
  }

  private setTrack() {
    this.player.src = this.track.url;
    this.player.load();
    // this.cdr.detectChanges();
  }
}
