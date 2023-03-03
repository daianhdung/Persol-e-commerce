import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BrandService } from 'app/services/brandService/brand.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent {
  listBrand: any[] = [];

  isSubmitted: boolean = false;

  formData = this.formBuilder.group({
    name: ['', Validators.required],
    brand: ['', Validators.required],
  });

  constructor(
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
      this.brandService.getAllBrand().subscribe({
      next: (response) => {
        this.listBrand = response.data;
      },
      error: (error) => console.log(error),
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    // // this.formData.
    // if (this.formData.valid) {
    //   const formDataRequest = new FormData()
    //   console.log(this.formData.value);

    //   const nameValue = this.formData.controls['name'].value
    //   formDataRequest.append('name', nameValue ? nameValue: '')

    //   const priceValue = this.formData.controls['price'].value
    //   formDataRequest.append('price', priceValue ? priceValue: '')

    //   const categoryValue = this.formData.controls['category'].value
    //   formDataRequest.append('category', categoryValue ? categoryValue: '')

    //   const brandValue = this.formData.controls['brand'].value
    //   formDataRequest.append('brand', brandValue ? brandValue: '')

    //   const mainImageValue = this.formData.controls['mainImage'].value
    //   formDataRequest.append('mainImage', mainImageValue ? mainImageValue: '')

    //   const imagesValue = this.formData.controls['images'].value
    //   formDataRequest.append('images', imagesValue ? imagesValue: '')

    //   this.spinner.show();
    //   this.productService.createProduct(formDataRequest).subscribe({
    //     next: (response) => {
    //       this.formData.reset();
    //       this.spinner.hide();
    //       this.toastr.success(response.message)
    //       console.log(response);
    //     },
    //     error: (response) => {
    //       this.spinner.hide();
    //       this.toastr.error(response.message)
    //     },
    //   });
    // }
  }
}
