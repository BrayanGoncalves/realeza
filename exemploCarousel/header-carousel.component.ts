import { Component, Input } from '@angular/core';
import { CarouselFrame } from '@models';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.scss'],
})
export class HeaderCarouselComponent {
  public _data: CarouselFrame[] = [];
  public _isCarousel = false;

  @Input() set data(val: CarouselFrame[]) {
    this._data = val;
    this._isCarousel = val && val.length > 1;
    this.swiperIndexChange(this.swiperIndex, this.showing);
  }
  public showing = false;
  public swiperIndex = 0;

  readonly swiperConfig: SwiperConfigInterface = {
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    centeredSlides: true,
    speed: 900,
    threshold: 10,
    navigation: { prevEl: '.header-prev', nextEl: '.header-next' },
    pagination: { el: '.swiper-pagination', clickable: true, hideOnClick: false,
      bulletActiveClass: 'swiper-pagination-bullet-light' },
  };

  swiperIndexChange($event: number, showing: boolean) {
    if (showing) {
      const len = this._data.length;
      const indexes = [$event, $event - 1, $event + 1];
      indexes.map(i => (len + i) % len).forEach(i => this._data[i].load = true);
    }
  }

  setShowing() {
    this.showing = true;
    this.swiperIndexChange(this.swiperIndex, this.showing);
  }

}
