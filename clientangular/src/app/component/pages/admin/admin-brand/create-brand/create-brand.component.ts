import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BrandService } from 'app/services/brandService/brand.service';
import { CategoryService } from 'app/services/categoryService/category.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent {
  listBrand: any[] = [];
  listCategory: any[] = [];

  isSubmitted: boolean = false;

  formData = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    category: ['', Validators.required],
    image: ['', Validators.required],
  });

  constructor(
    private brandService: BrandService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    forkJoin([
      this.brandService.getAllBrand(),
      this.categoryService.getAllCategory(),
    ]).subscribe({
      next: ([brandResponse, categoryResponse]) => {
        this.listBrand = brandResponse.data;
        this.listCategory = categoryResponse.data;
      },
      error: (error) => console.log(error),
    });
  }

  onSingleSelected(event: any) {
    const file = event.target.files[0];
    // this.formData.controls['mainImage'].setValue(file);
    console.log(file);
    this.formData.controls['image'].setValue(file);
  }

  onSubmit() {
    this.isSubmitted = true;

    // this.formData.
    if (this.formData.valid) {
      const formDataRequest = new FormData()
      console.log(this.formData.value);

      const nameValue = this.formData.controls['name'].value
      formDataRequest.append('name', nameValue ? nameValue: '')

      const categoryValue = this.formData.controls['category'].value
      formDataRequest.append('category', categoryValue ? categoryValue: '')

      const imageValue = this.formData.controls['image'].value
      formDataRequest.append('image', imageValue ? imageValue: '')


      this.spinner.show();
      // this.productService.createProduct(formDataRequest).subscribe({
      //   next: (response) => {
      //     this.formData.reset();
      //     this.spinner.hide();
      //     this.toastr.success(response.message)
      //     console.log(response);
      //   },
      //   error: (response) => {
      //     this.spinner.hide();
      //     this.toastr.error(response.message)
      //   },
      // });
    }
  }
}
