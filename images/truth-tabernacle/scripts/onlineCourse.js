let ls = localStorage;

let seriesBtn0 = document.getElementById('seriesBtn0');
let seriesBtn1 = document.getElementById('seriesBtn1');

// checks if already has memory or not of the courses

if(ls.getItem('series_revelation') != null) {
    console.log('this exists')
} else {
    ls.setItem('series_revelation', 0)
}

if(ls.getItem('series_stones_fit_the_frame_together') != null) {
    console.log('this exists')
} else {
    ls.setItem('series_stones_fit_the_frame_together', 0)
}

// checks if it should go to a preview or lesson

if(ls.getItem('series_revelation') == 0) {
    seriesBtn0.href = "bible_series_pages/bible_series_revelation_preview.html";
} else if(ls.getItem('series_revelation') == 1) {
    seriesBtn0.href = "bible_series_pages/bible_series_revelation.html";
}

if(ls.getItem('series_stones_fit_the_frame_together') == 0) {
    seriesBtn1.href = "bible_series_pages/bible_series_stones_fit_the_frame_together_preview.html";
} else if(ls.getItem('series_stones_fit_the_frame_together') == 1) {
    seriesBtn1.href = "bible_series_pages/bible_series_stones_fit_the_frame_together.html";
}