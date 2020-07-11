import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Villain } from '../../core';
import { VillainService } from '../villain.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {
  selected: Villain;
  // villains: Villain[];
  villains$: Observable<Villain[]>;
  // loading: boolean;
  loading$: Observable<boolean>;

  constructor(private villainService: VillainService) {
    this.villains$ = villainService.entities$;
    this.loading$ = villainService.loading$;
  }

  ngOnInit() {
    this.getVillains();
  }

  // add(villain: Villain) {
  //   this.loading = true;
  //   this.villainService
  //     .add(villain)
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(
  //       addedvillain => (this.villains = this.villains.concat(addedvillain))
  //     );
  // }

  add(villain: Villain) {
    this.villainService.add(villain);
  }

  close() {
    this.selected = null;
  }

  // delete(villain: Villain) {
  //   this.loading = true;
  //   this.close();
  //   this.villainService
  //     .delete(villain)
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(
  //       () => (this.villains = this.villains.filter(h => h.id !== villain.id))
  //     );
  // }
  delete(villain: Villain) {
    this.villainService.delete(villain);
    this.close();
  }

  enableAddMode() {
    // this.selected = null;
    this.selected = <any>{};
  }

  // getVillains() {
  //   this.loading = true;
  //   this.villainService
  //     .getAll()
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(villains => (this.villains = villains));
  //   this.close();
  // }

  getVillains() {
    this.villainService.getAll();
    this.close();
  }

  select(villain: Villain) {
    // this.selected = <any>{};
    this.selected = villain;
  }

  // update(villain: Villain) {
  //   this.loading = true;
  //   this.villainService
  //     .update(villain)
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(
  //       () =>
  //         (this.villains = this.villains.map(
  //           h => (h.id === villain.id ? villain : h)
  //         ))
  //     );
  // }

  update(villain: Villain) {
    this.villainService.update(villain);
  }
}
