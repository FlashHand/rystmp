<template>
	<div id="app">
		<div style="width: 600px;height: 200px;">
			<div>
				atk:<input type="text" v-model="atk">
			</div>
			<div>
				rtk:<input type="text" v-model="rtk">
			</div>
			<div>
				<a href="#" @click="setupCookie()">先设置cookie</a>
			</div>
			<div>
				baseurl:<input type="text" v-model="baseurl">
			</div>
			<div>
				选择产品：
				<select v-model="product" @change="selectProduct">
					<option value="view-yjz">做账</option>
					<option value="view-ykp">开票</option>
				</select>
			</div>
			<div>
				组织id,gid:<input type="text" v-model="gid">
			</div>
			<div>
				账套id非必填:<input type="text" v-model="aid">
			</div>
			<div>
				账期(YYYY-MM)非必填:<input type="text" v-model="ap">
			</div>

			<div>
				目标网页：{{ target }}
			</div>
			<div>
				<a href="#" @click="goRYS()">跳转</a>
			</div>
		</div>
		<!--		function tranweb() {-->
		<!--		setCookie("access_token","eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXNzZWVJZCI6MSwicHJvZHVjdElkIjozMCwiZ3JhbnRfdHlwZSI6InBhc3N3b3JkIiwidXNlcl9uYW1lIjoidGVzdDE5MDciLCJzY29wZSI6ImFsbCIsImV4cCI6MTY1MDAxODUwNiwidXNlcklkIjoiMTM4MzI0MTAzMzI2Njk2MjQzNCIsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sImp0aSI6ImM5NDhhOGU2LWE1MDMtNDcyMC05ODRkLTliYjBmNmQ0N2E5NCIsImNsaWVudF9pZCI6ImNsaWVudC1hcHAiLCJ1c2VybmFtZSI6InRlc3QxOTA3In0.ajl6xW-lqUxxY5LlzhqdCpwLSj99qXnAKA1yOwhQEtk2Iehm1JtJ151yu-7gByuWmjAwIHsvb49xLZO-VjwSWVShomhZv6oPNiPDxpszVuA4b9N6aRIWf_3H4S5fi1TtU-aynLmmgkz7XHYq-6mpySaqtyPUddhtXVJxP_skJwY");-->
		<!--		setCookie("refresh_token","eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXNzZWVJZCI6MSwicHJvZHVjdElkIjozMCwiZ3JhbnRfdHlwZSI6InBhc3N3b3JkIiwidXNlcl9uYW1lIjoidGVzdDE5MDciLCJzY29wZSI6ImFsbCIsImF0aSI6ImM5NDhhOGU2LWE1MDMtNDcyMC05ODRkLTliYjBmNmQ0N2E5NCIsImV4cCI6MTY1MDI0ODkwNiwidXNlcklkIjoiMTM4MzI0MTAzMzI2Njk2MjQzNCIsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sImp0aSI6IjRlZTZlZWZiLTliN2EtNDFhOS05M2QzLTQzOTY5ZDViNDM3MyIsImNsaWVudF9pZCI6ImNsaWVudC1hcHAiLCJ1c2VybmFtZSI6InRlc3QxOTA3In0.QF5p39FtMwWeNtte7-6IC7CgZCJXfsK3ekuMDO_6LEV8IxVTYmIUC5gKdjRWEhqFQfATDUGnG0FLHCfuLVqfX9StIP1vSet9kMuJAYVKpf642s2Bfd9qu7ynhSjR_VEBQFbsi0Nh1m8Q4u7ir87bvHoiipuCLFixayDxeVBGduw");-->
		<!--		alert("aa");-->

	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			baseurl: 'test2-zhs.rys.cn',
			atk: '',
			product: 'view-yjz',
			rtk: '',
			gid: '',
			aid: '',
			ap: ''
		}
	},
	computed: {
		target() {
			if (this.product === 'view-yjz') {
				return `https://${this.baseurl}/${this.product}/?gid=${this.gid}&vid=73&aid=${this.aid}&pid=28&ap=${this.ap}/`;
			} else if (this.product === 'view-ykp') {
				return `https:test2-zhs.rys.cn//${this.baseurl}/${this.product}/?gid=${this.gid}&vid=72&aid=${this.aid}&pid=28&ap=${this.ap}/`;
			} else {
				return `https://${this.baseurl}/?gid=${this.gid}`
			}
		}
	},
	components: {},
	methods: {
		setupCookie() {
			this.setCookie('access_token', this.atk);
			this.setCookie('refresh_token', this.rtk);
		},
		selectProduct() {
			console.log(this.product);
		},
		goRYS() {
			window.open(this.target);
		},
		setCookie(name, value) {
			var Days = 365;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
			let domainParts = document.domain.split('.');
			//是否包含com.cn组合顶级域名
			let domain = document.domain.indexOf('com.cn') > 0 ? domainParts.slice(-3).join('.') : domainParts.slice(-2).join('.');
			document.cookie = name + ("=" + (value) + `;domain=${domain};expires=` + exp.toGMTString() + ";path=/;");
		},
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;

}

div > div {
	margin-left: 20px;
	margin-top: 20px;
	text-align: left;
}
</style>
