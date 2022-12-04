import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {Class} from '../../model/class';
import {ProductServiceService} from '../../product-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  deleteStudent: Student;
  nameSearch: string;
  classSearch: string;
  classList: Class[] | undefined;

  pageNumber: number;

  message: string;
  date1: string;
  date2: string;

  constructor(private studentService: ProductServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.date1 = '';
    this.date2 = '';
    this.nameSearch = '';
    this.classSearch = '';
    this.pageNumber = 1;
    this.studentService.findAllClass().subscribe(data => {
      this.classList = data;
    });
    this.studentService.getList(this.nameSearch, this.classSearch).subscribe(data => {
      this.students = data;
    });
  }

  // private getList() {
  //   this.studentService.getList(this.nameSearch, this.classSearch).subscribe(data => {
  //     this.totalPage = Math.ceil(data.length / this.numberRecord);
  //     this.studentService.getListPage(this.numberRecord, this.currentPage, this.nameSearch, this.classSearch).subscribe(pagingList => {
  //       this.students = pagingList;
  //     });
  //   });
  search1() {
    this.studentService.getList(this.nameSearch, this.classSearch).subscribe(
      data => {
        this.students = data.filter(value => {
          if (this.date1 !== '' && this.date2 !== '') {
            const formatttt = new Date(value.dayOfBirth);
            const startDate = new Date(this.date1);
            const endDate = new Date(this.date2);
            if (formatttt > startDate && formatttt < endDate) {
              return value;
            }
          } else {
            return data;
          }
        });
      });
  }

  studentDelete(id: number) {
    this.studentService.findById(id).subscribe(data => {
      console.log(data);
      this.deleteStudent = data[0];
    });
  }

  deleteStudentById(id: number) {
    this.studentService.deleteStudent(id).subscribe(data => {
      this.message = 'Delete success!';
      this.ngOnInit();
    }, error => {
      this.message = 'Delete not success!';
    });
  }


}
