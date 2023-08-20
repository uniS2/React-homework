export function getView(view) {
  if (typeof view !== 'string') view = String(view);
  if (view > 10000) {
    return `${view.slice(0, -4)}.${view.slice(-4, -3)} 만`;
  } else {
    return view;
  }
}

