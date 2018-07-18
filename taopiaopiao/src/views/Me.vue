<template>
	<section class="me">
		<mt-cell title="电影票" to="/no" is-link value=""></mt-cell>
		<mt-cell title="优惠券" to="/no" is-link value=""></mt-cell>
		<mt-cell title="影城卡" to="/no" is-link value=""></mt-cell>
		<mt-cell title="演出票" to="/no" is-link value=""></mt-cell>
	</section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	data () {
		return {
		}
	},
	components: {
	},
	methods: {
		...mapMutations([
		  'pushLoadStack',
		  'completeLoad'
		])
	},
	created () {
	}
}
</script>

<style>
.me {
	padding-top: 10px;
}
</style>
