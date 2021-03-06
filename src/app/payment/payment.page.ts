import { Component, OnInit } from '@angular/core';
import { PedidoDTO } from 'src/models/pedido.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  pedido: PedidoDTO;
  parcelas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  formGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute : ActivatedRoute,
    public router : Router) {

      //Pega o objeto pedido, quem vem da página de endereço. 
      this.activatedRoute.queryParams
        .subscribe((res) => { 
          this.pedido = JSON.parse(res.value);
      });
  
      this.formGroup = this.formBuilder.group({
        numeroDeParcelas: [1, Validators.required],
        "@type": ["pagamentoComCartao", Validators.required]
      });
     }

ngOnInit() {}

  nextPage(){
    //Insere no objeto pedido as informações de pagamento
    this.pedido.pagamento = this.formGroup.value; 
    this.router.navigate(['order-confirmation'], {
      queryParams:{
        value: JSON.stringify(this.pedido)
      }
    }); 
  }

}
