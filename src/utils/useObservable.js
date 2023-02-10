export default function useObservable(observable$, setState) {
  return observable$.subscribe((value) => setState(value));
}
