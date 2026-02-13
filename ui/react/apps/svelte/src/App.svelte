<script lang="ts">
  import { onMount } from "svelte";
  import "./react-calendar-web";
  import calendarData from "./data/calendar-data.json";

  type CalendarDataItem = {
    title: string;
    start: string;
    end: string;
    allDay?: boolean;
  };

  type ReactCalendarElement = HTMLElement & {
    data: CalendarDataItem[];
    title: string;
    height: number | string;
    width: number | string;
  };

  let calendarElement: ReactCalendarElement | null = null;

  onMount(() => {
    if (!calendarElement) {
      return;
    }

    calendarElement.data = calendarData;
    calendarElement.title = "Svelte Project Calendar";
    calendarElement.height = 620;
    calendarElement.width = "100%";
  });
</script>

<main class="page">
  <h1>Svelte Host for React Web Component</h1>
  <p>The calendar below is rendered by the React-generated &lt;react-calendar&gt; web component.</p>
  <react-calendar bind:this={calendarElement}></react-calendar>
</main>
