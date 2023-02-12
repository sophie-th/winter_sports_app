import Home from './routes/Home.svelte';
import ChooseState from './routes/ChooseState.svelte';
import ChooseResort from './routes/ChooseResort.svelte';
import Resort from './routes/Resort.svelte';
import Guide from './routes/Guide.svelte';
import SavedGuides from './routes/SavedGuides.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
  // exact path
  '/': Home,
  '/choose-state': ChooseState,
  '/choose-resort': ChooseResort,
  '/resort': Resort,
  '/Guide': Guide,
  // The catch-all route must always be last
  '*': NotFound
};