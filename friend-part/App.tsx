import { useCallback, useState } from 'react';
import { GameCanvas } from './components/GameCanvas';
import { initialState, WEBSITE_COST } from '../my-part/simulation/models/GameState';
import { createWebsite } from '../my-part/simulation/createWebsite';
import {nextMonth} from "../my-part/simulation/nextMonth";

export default function App() {
  const [state, setState] = useState(initialState);
  const [computerOpen, setComputerOpen] = useState(false);
  const openComputer = useCallback(() => setComputerOpen(true), []);
  return <main>
    <header><span className="eyebrow">1995–2026 · BROWSER GAME PROTOTYPE</span><h1>Hello World</h1><p>Один компьютер. Первый сайт. Начало твоей интернет-истории.</p></header>
    <div className="status" aria-live="polite"><span>Год: {state.year}</span><span>Баланс: ${state.money}</span><span>Сайтов: {state.websites.length}</span></div>
    <GameCanvas onOpen={openComputer} />
    <p> Месяц: {state.month }</p>
    <button onClick={() => setState(nextMonth)}>
      Следующий месяц
    </button>
    <button onClick={openComputer}>Открыть компьютер</button>
    {computerOpen && <section aria-labelledby="computer-title">
      <h2 id="computer-title">Твой первый интернет-бизнес</h2>
      <p>Создай сайт за ${WEBSITE_COST}. Экономика и следующие эпохи появятся позже.</p>
      <button disabled={state.money < WEBSITE_COST} onClick={() => setState(createWebsite)}>Создать сайт · ${WEBSITE_COST}</button>
      <button className="secondary" onClick={() => setComputerOpen(false)}>Закрыть</button>
      {state.money < WEBSITE_COST && <p role="status">Недостаточно денег для нового сайта.</p>}
      <ul>{state.websites.map(site => <li key={site.id}>{site.name} · {site.foundedYear}</li>)}</ul>
    </section>}
    <footer>Прототип · Прогресс пока хранится только до перезагрузки страницы.</footer>
  </main>;
}
