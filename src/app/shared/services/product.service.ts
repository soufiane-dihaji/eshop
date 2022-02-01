import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productRef$;
  constructor(private db: AngularFireDatabase) {
    this.productRef$ = db.list('/products');
  }
  getAll() {
    return this.db
      .list('/products')
      .snapshotChanges()
      .pipe(
        map((products) =>
          products.map((changes: any) => ({
            key: changes.payload.key,
            title: changes.payload.val().title,
            price: changes.payload.val().price,
            category: changes.payload.val().category,
            imageUrl: changes.payload.val().imageUrl,
          }))
        )
      );
  }

  create(product: any) {
    return this.productRef$.push(product);
  }

  get(id: any) {
    return this.db.object('/products/' + id).valueChanges();
  }

  update(id: string, product: any) {
    return this.productRef$.update(id, product);
  }

  delete(id: string) {
    return this.productRef$.remove(id);
  }
}
