import {Component, HostListener, Inject, OnDestroy, OnInit} from '@angular/core';
import {RmApiService} from '../../../services/rm-api.service';
import {Observable, Subscription} from 'rxjs';
import {CharacterType} from '../../../util/types/characters/character-type';
import {DOCUMENT} from '@angular/common';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  public characters$: Observable<CharacterType[]>;
  public subscription: Subscription = new Subscription();
  public showBtn = false;
  public pageScroll = 1;

  constructor( @Inject(DOCUMENT) private document: Document, private rmService: RmApiService, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.localStorage.initialStorage();
    this.subscription.add(this.rmService.getData().subscribe());
    this.characters$ = this.rmService.characters$;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const yOffSet = window.pageYOffset;
    const scroll = this.document.documentElement.scrollTop;
    this.showBtn = (yOffSet || scroll) > 500;
  }

  scrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  scrolled(): void {
    this.pageScroll++;
    this.rmService.scrolledData(this.pageScroll);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
