(self["webpackChunkUIevents"] = self["webpackChunkUIevents"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  position: absolute;\n}\nion-header ion-toolbar {\n  padding-left: 14px;\n  padding-right: 14px;\n}\nion-header ion-toolbar ion-title {\n  --color: white;\n  font-size: 18px;\n}\n.default-left-padding {\n  padding-left: 26px;\n}\n.default-top-apdding {\n  padding-top: 26px !important;\n}\nion-content .banner {\n  position: relative;\n}\nion-content .banner img {\n  width: 100%;\n}\nion-content .banner .caption {\n  position: absolute;\n  width: 100%;\n  bottom: 55px;\n  font-size: 16px;\n  color: white;\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-content .banner .search {\n  position: absolute;\n  bottom: -40px;\n  width: calc(100% -52px);\n  background: white;\n  margin: 16px 26px 16px 26px;\n  padding: 5px 16px 5px 16px;\n  border-radius: 10px;\n  box-shadow: 0px 3px 12px 2px rgba(0, 0, 0, 0.16);\n}\nion-content .banner .search ion-item {\n  --inner-padding-end: 0 !important;\n}\nion-content .banner .search ion-item ion-input {\n  --placeholder-color: #212121 !important;\n  --placeholder-opacity:0.5;\n  --color:#21212150 !important;\n}\nion-content .banner .search ion-item ion-icon {\n  color: #21212150 !important;\n  margin-right: 10px;\n}\nion-content .banner .search ion-item ion-button {\n  height: 35px;\n  margin-left: 0 !important;\n  --box-shadow:none;\n}\nion-content .banner .search ion-item ion-button img {\n  width: 20px;\n  height: 20px;\n  transform: rotateZ(90deg);\n}\nion-content .title {\n  display: flex;\n  justify-content: space-between;\n  aling-items: center;\n  padding: 42px 26px 16px 26px;\n}\nion-content .title h2 {\n  margin: 0;\n  font-size: 17px;\n  font-weight: bold;\n  color: #364F6B;\n}\nion-content .title p {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\nion-content .event-slider ion-slide {\n  width: 20%;\n  margin-right: 30xp;\n}\nion-content .event-slider ion-slide ion-col {\n  padding-left: 0;\n}\nion-content .event-slider ion-slide ion-col ion-card {\n  width: 80%;\n  border-radius: 12px;\n  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.16);\n  margin-left: 0;\n  margin-top: 0;\n}\nion-content .event-slider ion-slide ion-col ion-card ion-card-header .img-center {\n  width: 100%;\n}\nion-content .event-slider ion-slide ion-col ion-card ion-card-header img {\n  width: 10%;\n}\nion-content .event-slider ion-slide ion-col ion-card ion-card-content {\n  padding-top: 13px;\n}\nion-content .event-slider ion-slide ion-col ion-card ion-card-content .date {\n  colo: #364F6B;\n  font-size: 10px;\n  margin-bottom: 5px;\n}\nion-content .event-slider ion-slide ion-col ion-card ion-card-content .eventname {\n  color: #364F6B;\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\nion-content .event-slider ion-slide ion-col ion-card ion-card-content .location {\n  display: flex;\n  aling-items: center;\n  color: var(--ion-colo-primary);\n  font-size: 10px;\n  margin-bottom: 5px;\n}\nion-content .live-event {\n  border-radius: 10px;\n  box-shadow: 0px 3px 12px 2px rgba(0, 0, 0, 0.16);\n  margin: 0 26px 26px 26px;\n  display: flex;\n  justify-content: space-between;\n}\nion-content .live-event img {\n  border-radius: 10px 0 0 10px;\n  object-flit: cover;\n}\nion-content .live-event .info {\n  padding: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\nion-content .live-event .info .content h6 {\n  color: #364F6B;\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  margin-top: 0px;\n}\nion-content .live-event .info .content .location {\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-primary);\n  font-size: 10px;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\nion-content .live-event .info .content .stats {\n  display: flex;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\nion-content .live-event .info .content .stats span {\n  display: flex;\n  align-items: center;\n  color: #364F6B30;\n  font-size: 10px;\n  margin-right: 10px;\n}\nion-content .live-event .info .indicator {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .live-event .info .indicator div {\n  background: #FFE6E6;\n  border-radius: 12px;\n  padding: 15px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxjQUFBO0VBRUEsZUFBQTtBQUFOO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBSUE7RUFDRSw0QkFBQTtBQURGO0FBTUU7RUFDRSxrQkFBQTtBQUhKO0FBS0k7RUFDRSxXQUFBO0FBSE47QUFNSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMTjtBQU9JO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FBTE47QUFRTTtFQUNFLGlDQUFBO0FBTlI7QUFTUTtFQUNFLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQVBWO0FBVVE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FBUlY7QUFXUTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBVFY7QUFXVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFUWjtBQW1CRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFqQko7QUFvQkk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWxCTjtBQW9CSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFsQk47QUF3Qkk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUF0Qk47QUF1Qk07RUFDRSxlQUFBO0FBckJSO0FBdUJRO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtBQXRCVjtBQXlCWTtFQUNFLFdBQUE7QUF2QmQ7QUF5Qlk7RUFDRSxVQUFBO0FBdkJkO0FBNEJVO0VBQ0UsaUJBQUE7QUExQlo7QUE0Qlk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBMUJkO0FBNkJZO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBM0JkO0FBOEJZO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUE1QmQ7QUFzQ0U7RUFDRSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFwQ0o7QUFzQ0k7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0FBcENOO0FBdUNJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFyQ047QUF3Q1E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBdENWO0FBeUNRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBdkNWO0FBeUNRO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQXZDVjtBQXlDVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBdkNaO0FBNENNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUExQ1I7QUE0Q1E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FBMUNWIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGlvbi10b29sYmFye1xuICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuXG4gICAgaW9uLXRpdGxle1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG5cbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn1cblxuLmRlZmF1bHQtbGVmdC1wYWRkaW5ne1xuICBwYWRkaW5nLWxlZnQ6IDI2cHg7IFxufVxuLmRlZmF1bHQtdG9wLWFwZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMjZweCAhaW1wb3J0YW50O1xufVxuXG5cbmlvbi1jb250ZW50IHtcbiAgLmJhbm5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBpbWd7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY2FwdGlvbntcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm90dG9tOjU1cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIC5zZWFyY2h7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC00MHB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtNTJweCk7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIG1hcmdpbjogMTZweCAyNnB4IDE2cHggMjZweDtcbiAgICAgIHBhZGRpbmc6IDVweCAxNnB4IDVweCAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTJweCAycHggcmdiYSgwLDAsMCwwLjE2KTtcblxuXG4gICAgICBpb24taXRlbXtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xuXG5cbiAgICAgICAgaW9uLWlucHV0e1xuICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMyMTIxMjEgIWltcG9ydGFudDtcbiAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6MC41O1xuICAgICAgICAgIC0tY29sb3I6IzIxMjEyMTUwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICBjb2xvcjojMjEyMTIxNTAgIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIC0tYm94LXNoYWRvdzpub25lO1xuXG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpOyBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICAudGl0bGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpbmctaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MnB4IDI2cHggMTZweCAyNnB4O1xuXG5cbiAgICBoMntcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IzM2NEY2QjtcbiAgICB9XG4gICAgcHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuXG4gIC5ldmVudC1zbGlkZXJ7XG4gICAgaW9uLXNsaWRle1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMzB4cDtcbiAgICAgIGlvbi1jb2x7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgICAgICBpb24tY2FyZHtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IDJweCByZ2JhKDAsMCwwLDAuMTYpO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcblxuICAgICAgICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgICAgIC5pbWctY2VudGVye1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTNweDtcblxuICAgICAgICAgICAgLmRhdGV7XG4gICAgICAgICAgICAgIGNvbG86IzM2NEY2QjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudG5hbWV7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzY0RjZCO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2NhdGlvbntcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpbmctaXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG8tcHJpbWFyeSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC5saXZlLWV2ZW50e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4IDJweCByZ2JhKDAsMCwwLDAuMTYpO1xuICAgIG1hcmdpbjogMCAyNnB4IDI2cHggMjZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGltZ3tcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG4gICAgICBvYmplY3QtZmxpdDpjb3ZlcjtcbiAgICB9XG5cbiAgICAuaW5mb3tcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcblxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBoNntcbiAgICAgICAgICBjb2xvcjogIzM2NEY2QjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHN7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcblxuICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMzNjRGNkIzMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pbmRpY2F0b3J7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcblxuICAgICAgICBkaXZ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRTZFNjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgIHBhZGRpbmc6MTVweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufSJdfQ== */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\" no-border>\n      <ion-buttons slot=\"start\">\n        <ion-button>\n          <img src=\"../../assets/menu.svg\">\n        </ion-button>\n      </ion-buttons>\n\n    <ion-title>\n      Events\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n        <ion-button>\n          <img src=\"../../assets/notification.svg\">\n        </ion-button>\n      </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n <div class=\"banner\">\n    <img src=\"../../assets/backroud.jpg\">\n\n    <div class=\"caption ion-padding\">\n      Join with <br>\n      upcoming events\n      \n    </div>\n   \n\n   <div class=\"search\">\n      <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-icon slot=\"start\" name=\"search-outline\"></ion-icon>\n          <ion-input placeholder=\"Search events\"></ion-input>\n          <ion-button slot=\"end\">\n            <img src=\"../../assets/seting.png\">\n          </ion-button>\n        \n      </ion-item>\n   </div>\n </div>\n\n\n <div class=\"title\">\n  <h2> Popular Events</h2>\n  <p>See all</p>\n </div>\n\n <div class=\"event-slider\">\n    <ion-slides [options]=\"{sliderPerView: 'auto', zoom:false, grabCursor:true}\" class=\"default-left-padding\">\n        \n\n      <ion-slide>\n        <ion-col class=\"ion-text-left\">\n            <ion-card>\n                <ion-card-header class=\"ion-no-padding\">\n                  \n                  <img src=\"../../assets/events/event1.svg\" class=\"img-center\">\n                </ion-card-header>\n\n                <ion-card-content class=\"ion-no-padding\">\n                  \n                  <p class=\"date\"> 17D Julio, 2021</p>\n                  <h2 class=\"eventname\"> Internacional Jazz festival</h2>\n                  <p class=\"location\"><ion-icon name=\"location\"></ion-icon>Caracas, Vene</p>\n\n\n                  <div class=\"additional-info\">\n                    <div class=\"attendees\">\n                      <img src=\"../../assets/persons/person1.svg\">\n                      <img src=\"../../assets/persons/person2.svg\">\n                      <img src=\"../../assets/persons/person3.svg\">\n                      <img src=\"../../assets/persons/person4.svg\">\n\n                      <div class=\"count\">\n                        <img src=\"../../assets/persons/person-placeholder.svg\">\n                        <p>+7</p>\n                      </div>\n                    </div>\n\n                    <p class=\"time\">10:40pm</p>\n                  </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n      </ion-slide>\n<!--Card-2-->\n      <ion-slide>\n        <ion-col class=\"ion-text-left\">\n            <ion-card>\n                <ion-card-header class=\"ion-no-padding\">\n                  \n                  <img src=\"../../assets/events/event2.svg\" class=\"img-center\">\n                </ion-card-header>\n\n                <ion-card-content class=\"ion-no-padding\">\n                  \n                  <p class=\"date\"> 17D Julio, 2021</p>\n                  <h2 class=\"eventname\"> Internacional Jazz festival</h2>\n                  <p class=\"location\"><ion-icon name=\"location\"></ion-icon>Caracas, Vene</p>\n\n\n                  <div class=\"additional-info\">\n                    <div class=\"attendees\">\n                      <img src=\"../../assets/persons/person1.svg\">\n                      <img src=\"../../assets/persons/person2.svg\">\n                      <img src=\"../../assets/persons/person3.svg\">\n                      <img src=\"../../assets/persons/person4.svg\">\n\n                      <div class=\"count\">\n                        <img src=\"../../assets/persons/person-placeholder.svg\">\n                        <p>+7</p>\n                      </div>\n                    </div>\n\n                    <p class=\"time\">10:40pm</p>\n                  </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n </div>\n\n\n <div class=\"default-top-apdding title\">\n  <h2>Live Right now</h2>\n   <p>See all</p>\n </div>\n\n <div class=\"live-event\">\n  <img src=\"../../assets/events/event3.svg\">\n\n  <div class=\"info\">\n    <div class=\"content\">\n      <h6>Wordl art Day</h6>\n      <p class=\"stats\">\n        <span><ion-icon name=\"eye\"></ion-icon>&nbsp;23k</span><span><ion-icon name=\"heart\">&nbsp;1221</ion-icon></span>\n      </p>\n\n      <p class=\"location\"><ion-icon name=\"location\">Caracas, Venezuela</ion-icon></p>\n\n\n       <div class=\"additional-info\">\n          <div class=\"attendees\">\n            <img src=\"../../assets/persons/person1.svg\">\n            <img src=\"../../assets/persons/person2.svg\">\n            <img src=\"../../assets/persons/person3.svg\">\n            <img src=\"../../assets/persons/person4.svg\">\n\n              <div class=\"count\">\n                 <img src=\"../../assets/persons/person-placeholder.svg\">\n                          <p>+7</p>\n              </div>\n            </div>\n\n                <p class=\"time\">10:40pm</p>\n        </div>\n    </div>\n\n      <div class=\"indicator\">\n        <div>LIVE</div>\n      </div>\n\n  </div>\n </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map