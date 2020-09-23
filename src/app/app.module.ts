import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {TodoComponent} from './todo/todo.component';
import {FilterComponent} from './filter/filter.component';
import {SearchComponent} from './search/search.component';
import {MainComponent} from './main/main.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';

import {ForTestComponent} from './for-test/for-test.component';
import {FilterCategoryComponent} from './filter-category/filter-category.component';
import {Test1Component} from './test1/test1.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {MainService} from './services/main.service';
import {DbService} from './services/db.service';
import {InfoComponent} from './info/info.component';
import {CategoriesComponent} from './categories/categories.component';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {LeftPanelComponent} from './left-panel/left-panel.component';
import {FooterComponent} from './footer/footer.component';
import {ProductComponent} from './product/product.component';
import { CategoryComponent } from './category/category.component';
import {ListboxModule} from 'primeng/listbox';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    TodoComponent,
    FilterComponent,
    SearchComponent,
    MainComponent,
    AboutComponent,
    HomeComponent,
    ForTestComponent,
    FilterCategoryComponent,
    Test1Component,
    PaginatorComponent,
    ProductComponent,
    InfoComponent,
    CategoriesComponent,
    LeftPanelComponent,
    FooterComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    ListboxModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    NgZorroAntdModule,
  ],
  providers: [
    DbService, // один из вариантов регичтрайии сервиса
    MainService,
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
