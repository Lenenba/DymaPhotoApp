import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Photo } from '../interfaces/photo.interface';
import { createApi } from 'unsplash-js'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private accessKey = 'f3dfG2FBujPe8OeR9wVCIIfvIgG9RMdEdmT9QjNJ638';

  private unsplash = createApi({
    accessKey: this.accessKey,
  });

  constructor() { }

  public searchPhotos(search: string): Observable<Photo[]> {
    return from(this.unsplash.search.getPhotos({query: search, orientation: 'squarish'})).pipe(
      map((result: any) => result.response?.results.map((r: any) => ({url: r.urls.small})))
    )
  }
}
