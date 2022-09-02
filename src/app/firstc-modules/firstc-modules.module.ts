import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FounderComponent } from './founder/founder.component';
import { FounderVersion1Component } from './founder/founder-version1/founder-version1.component';
import { FounderVersion2Component } from './founder/founder-version2/founder-version2.component';
import { FounderVersion3Component } from './founder/founder-version3/founder-version3.component';
import { FounderVersion4Component } from './founder/founder-version4/founder-version4.component';
import { OpenFredomComponent } from './open-fredom/open-fredom.component';
import { ContactComponent } from './contact/contact.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { FooterComponent } from './footer/footer.component';
import { OurproductsVersion1Component } from './our-products/ourproducts-version1/ourproducts-version1.component';
import { OurproductsVersion2Component } from './our-products/ourproducts-version2/ourproducts-version2.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BannerComponent,
    FounderComponent,
    FounderVersion1Component,
    FounderVersion2Component,
    FounderVersion3Component,
    FounderVersion4Component,
    OpenFredomComponent,
    ContactComponent,
    OurProductsComponent,
    FooterComponent,
    OurproductsVersion1Component,
    OurproductsVersion2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,
            BannerComponent,
            FounderComponent,
            OpenFredomComponent,
            OurProductsComponent,
            ContactComponent,
            FooterComponent
  ]
})
export class FirstcModulesModule { }
