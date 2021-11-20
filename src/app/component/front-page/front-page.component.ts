import { Component, OnInit } from '@angular/core';
import { AddDetailService } from 'src/app/service/add-detail.service';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Model/users';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  
like: boolean = false;
id: number;

  images:any = [
    'assets/images/1.png',
    'assets/images/2.png',
    'assets/images/3.png',
    'assets/images/4.png',
    'assets/images/5.png',
  ]; 



  closeResult: string;
  contactList: any = [];

   contact: any = {
     image:'',
     name:'',
     email:'',
     phone:'',
     company:''
   }



  constructor(private userService: AddDetailService,
              private modalService: NgbModal,
              private route: ActivatedRoute) { }



  ngOnInit( ) {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getContacts().subscribe((Response: any) => {console.log(Response)
    this.contactList = Response;
    console.log("Showing all Contacts", this.contactList);

    let imgNumber = 0;

    this.contactList.forEach((value: any) => {
      value.image = this.images[imgNumber];
      value.like = false;
      imgNumber++;
      if(imgNumber == 5){
        imgNumber = 0;
      }
    });
    console.log("User initiated", this.contactList)
    if(this.id != 0){
      this.contact = this.userService.onGetEmployee(this.id)
    }
  });

  }

onLike(user: any){
   this.contactList.forEach((value:any) => {
    if (value.id == user.id) {
      if (value.like == true) {
        value.like = false;
      } else {
        value.like = true;
      }
    }
   });
   console.log("after like", this.contactList);
}

  onSubmit(form: NgForm){
    let contact : any = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      company: form.value.company,
    }

    this.userService.addContact(contact);
  }

  onAdd(){
    console.log(this.contactList);
    this.userService.addContact(this.contactList).subscribe(contacts => console.log("Contact added Successfully!"));
  }

  onEdit(){
    this.userService.updateContact(this.contactList).subscribe(contacts=>console.log("Contact updated successfully!"));
  }


  onDelete(user: any) {
    const index = this.contactList.indexOf(user);
    if (index > -1) {
      this.contactList.splice(index, 1);
    }
    console.log('Contact Deleted', this.contactList);
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
