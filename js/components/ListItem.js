const ListItem = Vue.component('listItem', {
    props: ['name', 'abv'],
    template: `
        <li v-for="(item, index) in data" class="list-group-item">
            {{ index + 1 }}. {{ item.name }}; ABV: {{ item.abv}}.
        </li>
    `
});