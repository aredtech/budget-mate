import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const SidenavOpenClose = trigger('sideNavOpenClose', [
  state(
    'open',
    style({
      width: '190px',
    })
  ),
  state(
    'closed',
    style({
      width: '72px',
    })
  ),
  transition('open => closed', [animate('200ms ease-in-out')]),
  transition('closed => open', [animate('200ms ease-in-out')]),
]);
