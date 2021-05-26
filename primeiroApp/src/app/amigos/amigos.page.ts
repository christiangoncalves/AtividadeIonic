import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  public Amigos = [
    { Nome: 'amigo1', idade: '20', nivelAmizade: '5' },
    { Nome: 'amigo2', idade: '21', nivelAmizade: '2' },
    { Nome: 'amigo3', idade: '24', nivelAmizade: '3' },
    { Nome: 'amigo4', idade: '29', nivelAmizade: '5' },
    { Nome: 'amigo5', idade: '30', nivelAmizade: '4' },
  ];

  constructor(public actionSheetController: ActionSheetController) { }


  async presentActionSheet(i) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',  
        handler: () => {
          this.Amigos.splice(i, 1);
        }
      }, {
        text: 'Editar',
        icon: 'cog',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Cancelar',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('Delete clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role); 
  }

  ngOnInit() {
  }

}
