<template>
  <!-- Chats View -->
            <div class="col-lg-9 message-view task-view">
              <div class="chat-window">
                <div class="fixed-header">
                  <div class="navbar">
                    <div class="user-details me-auto">
                      <div class="float-start user-img">
                        <router-link class="avatar" to="/profile" title="Mike Litorus">
                          <img src="../../../../assets/img/profiles/avatar-05.jpg" alt="" class="rounded-circle">
                          <span class="status online"></span>
                        </router-link>
                      </div>
                      <div class="user-info float-start">
                        <router-link to="/profile" title="Mike Litorus"><span>Mike Litorus</span> <i class="typing-text">Typing...</i></router-link>
                        <span class="last-seen">Last seen today at 7:50 AM</span>
                      </div>
                    </div>
                    <div class="search-box">
                      <div class="input-group input-group-sm">
                        <input type="text" placeholder="Search" class="form-control">
                        <button type="button" class="btn"><i class="fa fa-search"></i></button>
                      </div>
                    </div>
                    <ul class="nav custom-menu">
                      <li class="nav-item">
                        <a class="nav-link task-chat profile-rightbar float-end" id="task_chat" href="#task_window"><i class="fa fa-user"></i></a>
                      </li>
                      <li class="nav-item">
                        <router-link to="/voice-call" class="nav-link"><i class="fa fa-phone"></i></router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/video-call" class="nav-link"><i class="fas fa-video"></i></router-link>
                      </li>
                      <li class="nav-item dropdown dropdown-action">
                        <a aria-expanded="false" data-bs-toggle="dropdown" class="nav-link dropdown-toggle" href=""><i class="fa fa-cog"></i></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a href="javascript:void(0)" class="dropdown-item">Delete Conversations</a>
                          <a href="javascript:void(0)" class="dropdown-item">Settings</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="chat-contents">
                  <div class="chat-content-wrap">
                    <div class="chat-wrap-inner">
                      <div class="chat-box">
                        <div class="chats">
                          <div class="chat chat-right">
                            <div class="chat-body">
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>Hello. What can I do for you?</p>
                                  <span class="chat-time">8:30 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="chat-line">
                            <span class="chat-date">October 8th, 2018</span>
                          </div>
                          <div class="chat chat-left">
                            <div class="chat-avatar">
                              <router-link to="/profile" class="avatar">
                                <img alt="" src="../../../../assets/img/profiles/avatar-05.jpg">
                              </router-link>
                            </div>
                            <div class="chat-body">
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>I'm just looking around.</p>
                                  <p>Will you tell me something about yourself? </p>
                                  <span class="chat-time">8:35 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>Are you there? That time!</p>
                                  <span class="chat-time">8:40 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="chat chat-right">
                            <div class="chat-body">
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>Where?</p>
                                  <span class="chat-time">8:35 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
                                  <span class="chat-time">8:42 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="chat chat-left">
                            <div class="chat-avatar">
                              <router-link to="/profile" class="avatar">
                              <img alt="" src="../../../../assets/img/profiles/avatar-05.jpg">
                              </router-link>
                            </div>
                            <div class="chat-body">
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>You wait for notice.</p>
                                  <span class="chat-time">8:30 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>Consectetuorem ipsum dolor sit?</p>
                                  <span class="chat-time">8:50 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>OK?</p>
                                  <span class="chat-time">8:55 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="chat-bubble">
                                <div class="chat-content img-content">
                                  <div class="chat-img-group clearfix">
                                    <p>Uploaded 3 Images</p>
                                    <a class="chat-img-attach" href="#">
                                      <img width="182" height="137" alt="" src="../../../../assets/img/placeholder.jpg">
                                      <div class="chat-placeholder">
                                        <div class="chat-img-name">placeholder.jpg</div>
                                        <div class="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                    <a class="chat-img-attach" href="#">
                                      <img width="182" height="137" alt="" src="../../../../assets/img/placeholder.jpg">
                                      <div class="chat-placeholder">
                                        <div class="chat-img-name">842 KB</div>
                                      </div>
                                    </a>
                                    <a class="chat-img-attach" href="#">
                                      <img width="182" height="137" alt="" src="../../../../assets/img/placeholder.jpg">
                                      <div class="chat-placeholder">
                                        <div class="chat-img-name">placeholder.jpg</div>
                                        <div class="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                  </div>
                                  <span class="chat-time">9:00 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="chat chat-right">
                            <div class="chat-body">
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>OK!</p>
                                  <span class="chat-time">9:00 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="chat chat-left">
                            <div class="chat-avatar">
                              <router-link to="/profile" class="avatar">
                                <img alt="" src="../../../../assets/img/profiles/avatar-05.jpg">
                              </router-link>
                            </div>
                            <div class="chat-body">
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>Uploaded 3 files</p>
                                  <ul class="attach-list">
                                    <li><i class="fa fa-file"></i> <a href="#">example.avi</a></li>
                                    <li><i class="fa fa-file"></i> <a href="#">activity.psd</a></li>
                                    <li><i class="fa fa-file"></i> <a href="#">example.psd</a></li>
                                  </ul>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>Consectetuorem ipsum dolor sit?</p>
                                  <span class="chat-time">8:50 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>OK?</p>
                                  <span class="chat-time">8:55 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="chat chat-right">
                            <div class="chat-body">
                              <div class="chat-bubble">
                                <div class="chat-content img-content">
                                  <div class="chat-img-group clearfix">
                                    <p>Uploaded 6 Images</p>
                                    <a class="chat-img-attach" href="#">
                                      <img width="182" height="137" alt="" src="../../../../assets/img/placeholder.jpg">
                                      <div class="chat-placeholder">
                                        <div class="chat-img-name">placeholder.jpg</div>
                                        <div class="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                    <a class="chat-img-attach" href="#">
                                      <img width="182" height="137" alt="" src="../../../../assets/img/placeholder.jpg">
                                      <div class="chat-placeholder">
                                        <div class="chat-img-name">842 KB</div>
                                      </div>
                                    </a>
                                    <a class="chat-img-attach" href="#">
                                      <img width="182" height="137" alt="" src="../../../../assets/img/placeholder.jpg">
                                      <div class="chat-placeholder">
                                        <div class="chat-img-name">placeholder.jpg</div>
                                        <div class="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                    <a class="chat-img-attach" href="#">
                                      <img width="182" height="137" alt="" src="../../../../assets/img/placeholder.jpg">
                                      <div class="chat-placeholder">
                                        <div class="chat-img-name">placeholder.jpg</div>
                                        <div class="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                    <a class="chat-img-attach" href="#">
                                      <img width="182" height="137" alt="" src="../../../../assets/img/placeholder.jpg">
                                      <div class="chat-placeholder">
                                        <div class="chat-img-name">placeholder.jpg</div>
                                        <div class="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                    <a class="chat-img-attach" href="#">
                                      <img width="182" height="137" alt="" src="../../../../assets/img/placeholder.jpg">
                                      <div class="chat-placeholder">
                                        <div class="chat-img-name">placeholder.jpg</div>
                                        <div class="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                  </div>
                                  <span class="chat-time">9:00 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="chat chat-left">
                            <div class="chat-avatar">
                              <router-link to="/profile" class="avatar">
                                <img alt="" src="../../../../assets/img/profiles/avatar-05.jpg">
                              </router-link>
                            </div>
                            <div class="chat-body">
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <ul class="attach-list">
                                    <li class="pdf-file"><i class="fa fa-file-pdf-o"></i> <a href="#">Document_2016.pdf</a></li>
                                  </ul>
                                  <span class="chat-time">9:00 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>  
                          <div class="chat chat-right">
                            <div class="chat-body">
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <ul class="attach-list">
                                    <li class="pdf-file"><i class="fa fa-file-pdf-o"></i> <a href="#">Document_2016.pdf</a></li>
                                  </ul>
                                  <span class="chat-time">9:00 am</span>
                                </div>
                                <div class="chat-action-btns">
                                  <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fa fa-share-alt"></i></a></li>
                                    <li><a href="#" class="edit-msg"><i class="fa fa-pencil"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fa fa-trash-o"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="chat chat-left">
                            <div class="chat-avatar">
                              <router-link to="/profile" class="avatar">
                                <img alt="" src="../../../../assets/img/profiles/avatar-05.jpg">
                              </router-link>
                            </div>
                            <div class="chat-body">
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <p>Typing ...</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chat-footer">
                  <div class="message-bar">
                    <div class="message-inner">
                      <a class="link attach-icon" href="#" data-bs-toggle="modal" data-bs-target="#drag_files"><img src="../../../../assets/img/attachment.png" alt=""></a>
                      <div class="message-area">
                        <div class="input-group">
                          <textarea class="form-control" placeholder="Type message..."></textarea>
                          <button class="btn btn-custom" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Chats View -->
</template>
