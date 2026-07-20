import { useEffect } from 'react';

export function useDocumentTitle(page: string) {
  useEffect(() => {
    document.title = `MOSAIC® Leadership Archetypes® — ${page}`;
  }, [page]);
}
