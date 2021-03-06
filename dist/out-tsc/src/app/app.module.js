import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriaService } from './services/domain/categoria.service';
import { ErrorInterceptorProvider } from 'src/interceptors/error-interceptor';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { ClienteService } from './services/domain/cliente.service';
import { AuthInterceptorProvider } from 'src/interceptors/auth-interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CidadeService } from './services/domain/cidade.service';
import { EstadoService } from './services/domain/estado.service';
import { ProdutoService } from './services/domain/produto.service';
import { CartService } from './services/domain/cart.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [
                BrowserModule,
                ReactiveFormsModule,
                FormsModule,
                HttpClientModule,
                IonicModule.forRoot(),
                AppRoutingModule
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
                CategoriaService,
                AuthInterceptorProvider,
                ErrorInterceptorProvider,
                AuthService,
                StorageService,
                ClienteService,
                FormsModule,
                ReactiveFormsModule,
                CidadeService,
                EstadoService,
                ProdutoService,
                CartService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map