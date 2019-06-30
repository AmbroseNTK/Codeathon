'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">webapp documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ea16a8ddea360005470549c087408a57"' : 'data-target="#xs-components-links-module-AppModule-ea16a8ddea360005470549c087408a57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ea16a8ddea360005470549c087408a57"' :
                                            'id="xs-components-links-module-AppModule-ea16a8ddea360005470549c087408a57"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CreateNewChallengeModule.html" data-type="entity-link">CreateNewChallengeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreateNewChallengeModule-e7d2ba7ab918c8b9dcbcf486d33bec97"' : 'data-target="#xs-components-links-module-CreateNewChallengeModule-e7d2ba7ab918c8b9dcbcf486d33bec97"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreateNewChallengeModule-e7d2ba7ab918c8b9dcbcf486d33bec97"' :
                                            'id="xs-components-links-module-CreateNewChallengeModule-e7d2ba7ab918c8b9dcbcf486d33bec97"' }>
                                            <li class="link">
                                                <a href="components/CreateFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModifyFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModifyFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestcasesTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestcasesTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreateNewChallengeRoutingModule.html" data-type="entity-link">CreateNewChallengeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreModule.html" data-type="entity-link">ExploreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExploreModule-61ac5aaa885416bcd324a5e9d6f7058e"' : 'data-target="#xs-components-links-module-ExploreModule-61ac5aaa885416bcd324a5e9d6f7058e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreModule-61ac5aaa885416bcd324a5e9d6f7058e"' :
                                            'id="xs-components-links-module-ExploreModule-61ac5aaa885416bcd324a5e9d6f7058e"' }>
                                            <li class="link">
                                                <a href="components/SearchPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreRoutingModule.html" data-type="entity-link">ExploreRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-5ee8299d2e178439c329a9579a323235"' : 'data-target="#xs-components-links-module-LoginModule-5ee8299d2e178439c329a9579a323235"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-5ee8299d2e178439c329a9579a323235"' :
                                            'id="xs-components-links-module-LoginModule-5ee8299d2e178439c329a9579a323235"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-bbb308d4e3db08320eef8c56e0251342"' : 'data-target="#xs-components-links-module-SharedModule-bbb308d4e3db08320eef8c56e0251342"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-bbb308d4e3db08320eef8c56e0251342"' :
                                            'id="xs-components-links-module-SharedModule-bbb308d4e3db08320eef8c56e0251342"' }>
                                            <li class="link">
                                                <a href="components/ChallengeListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChallengeListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkspaceModule.html" data-type="entity-link">WorkspaceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WorkspaceModule-a4c20c9b33f8bf141025a1989d563fbd"' : 'data-target="#xs-components-links-module-WorkspaceModule-a4c20c9b33f8bf141025a1989d563fbd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkspaceModule-a4c20c9b33f8bf141025a1989d563fbd"' :
                                            'id="xs-components-links-module-WorkspaceModule-a4c20c9b33f8bf141025a1989d563fbd"' }>
                                            <li class="link">
                                                <a href="components/CodingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CodingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SolutionDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SolutionDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkspaceRoutingModule.html" data-type="entity-link">WorkspaceRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Fetch.html" data-type="entity-link">Fetch</a>
                            </li>
                            <li class="link">
                                <a href="classes/Fetch-1.html" data-type="entity-link">Fetch</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchFailed.html" data-type="entity-link">FetchFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchFailed-1.html" data-type="entity-link">FetchFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchOwn.html" data-type="entity-link">FetchOwn</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchOwnFailed.html" data-type="entity-link">FetchOwnFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchOwnSuccess.html" data-type="entity-link">FetchOwnSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchProfile.html" data-type="entity-link">FetchProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchProfileFailed.html" data-type="entity-link">FetchProfileFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchProfileSuccess.html" data-type="entity-link">FetchProfileSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchSuccess.html" data-type="entity-link">FetchSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchSuccess-1.html" data-type="entity-link">FetchSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link">Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginFailed.html" data-type="entity-link">LoginFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginSuccess.html" data-type="entity-link">LoginSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/Put.html" data-type="entity-link">Put</a>
                            </li>
                            <li class="link">
                                <a href="classes/PutFailed.html" data-type="entity-link">PutFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/PutSuccess.html" data-type="entity-link">PutSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/Update.html" data-type="entity-link">Update</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFailed.html" data-type="entity-link">UpdateFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSuccess.html" data-type="entity-link">UpdateSuccess</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ChallengeEffect.html" data-type="entity-link">ChallengeEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChallengeService.html" data-type="entity-link">ChallengeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigEffect.html" data-type="entity-link">ConfigEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link">ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserEffect.html" data-type="entity-link">UserEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Challenge.html" data-type="entity-link">Challenge</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChallengeEntityModel.html" data-type="entity-link">ChallengeEntityModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Config.html" data-type="entity-link">Config</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppState.html" data-type="entity-link">IAppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Testcase.html" data-type="entity-link">Testcase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});