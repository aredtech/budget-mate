import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { materialIcons } from './material-icons';

interface Icon {
  name: string;
  version: number;
  popularity: number;
  codepoint: number;
  unsupported_families: string[];
  categories: string[];
  tags: string[];
  sizes_px: number[];
}
[];

@Component({
  selector: 'app-icon-picker',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './icon-picker.component.html',
  styleUrl: './icon-picker.component.scss',
})
export class IconPickerComponent implements OnInit {
  materialIcons = materialIcons;
  filteredIcons = materialIcons;

  ngOnInit(): void {}

  filterIcons(evt: Event) {
    const searchValue = (evt.target as HTMLInputElement).value;

    if (searchValue) {
      this.filteredIcons = this.searchAndSort(this.materialIcons, searchValue);
    } else {
      this.filteredIcons = materialIcons;
    }
  }

  searchAndSort(data: Icon[], searchTerm: string) {
    // Calculate score based on tag matches
    function matchScore(obj: Icon) {
      let score = 0;
      if (obj.name.toLowerCase() == searchTerm.toLowerCase()) {
        return (score += 5);
      }
      for (const tag of obj.tags) {
        const lowerTag = tag.toLowerCase();
        const lowerSearchTerm = searchTerm.toLowerCase();
        if (lowerTag === lowerSearchTerm) {
          score += 3; // Exact match
        } else if (lowerTag.includes(lowerSearchTerm)) {
          score += 1; // Partial match
        }
      }
      return score;
    }

    // Sort data by match score and name
    return data.sort((a, b) => {
      const scoreA = matchScore(a);
      const scoreB = matchScore(b);
      if (scoreA !== scoreB) {
        return scoreB - scoreA; // Higher score first
      } else {
        return a.name.localeCompare(b.name); // Alphabetical order if scores equal
      }
    });
  }
}
