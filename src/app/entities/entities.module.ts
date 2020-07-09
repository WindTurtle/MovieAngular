import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { EntitiesComponent } from './entities.component';

@NgModule({
  declarations: [EntitiesComponent],
  imports: [CommonModule, EntitiesRoutingModule],
})
export class EntitiesModule {}
