/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/catalog/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/products');
  }
}*/
import { Injectable } from '@angular/core';
import { Products } from '../data/products'; // adjust path as needed
import { IProduct } from 'src/app/catalog/product.model';

/*@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})*/
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] = Products;
}