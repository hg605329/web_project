function func_00() {
    var btn_00 = document.getElementById('btn_00');
    var ul_00 = document.getElementById('ul_00');
    if (btn_00 != null && ul_00 != null) {
        btn_00.addEventListener('click', function () {
            var classnames = this.className.split(' ');
            if (classnames.indexOf('on') == -1) {
                this.className += ' on';
                ul_00.style.height = '290px';
            } else {
                this.className = this.className.replace(' on', '');
                ul_00.style.height = '0px';
            }
            console.log(this.className);
        }, false);
    }
}
document.addEventListener('DOMContentLoaded', func_00, false);