<template>
    <div class="hello">
    </div>
</template>

<script>
import QuotesIfText from './QuotesIfText'
// import QuotesIfText from '@desco/quotes-if-text'

export default {
    name: 'HelloWorld',
    mounted () {
        console.log(QuotesIfText(1)) // 1
        console.log(QuotesIfText('9')) // 9
        console.log(QuotesIfText('Helow')) // "Helow"
        console.log(QuotesIfText('World', "'")) // 'World'
        console.log(QuotesIfText('Your', '`')) // `Your`
        console.log(QuotesIfText('Beautiful', '"')) // "Beautiful"
    }
}
</script>