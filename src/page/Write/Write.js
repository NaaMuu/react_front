import React from "react";
import "./Write.css";

const Write = () => {
    return (
        <div className="write-page">
            <div className="form-container">
                <form method="post" name="postForm">
                    <input type="hidden" name="csrfmiddlewaretoken" value="your_csrf_token" />
                    <p>
                        <input type="text" name="author" required id="id_author" value="11717" readOnly hidden />
                    </p>
                    <p>
                        <input type="text" name="topic" required id="id_topic" value="1" readOnly hidden />
                    </p>
                    <div className="flex justify-end">
                        <div id="id_postPublicTooltip" className="tooltip tooltip-info" data-tip="누구나 일기를 읽을 수 있어요">
                            <p className="md:w-40">
                                <select name="public" className="select select-bordered select-primary w-full max-w-xs" id="id_public">
                                    <option value="public" selected>공개</option>
                                    <option value="private">비공개</option>
                                </select>
                            </p>
                        </div>
                    </div>
                    <p>
                        <input type="text" name="title" className="input input-primary input-bordered my-2" placeholder="제목" style={{ width: "100%" }} maxlength="40" autocomplete="off" id="id_title" required />
                    </p>
                    <p>
                        <textarea name="content" className="input input-primary input-bordered my-2" placeholder="r글을 작성해주세요." style={{ width: "100%", height: "400px" }} required id="id_content"></textarea>
                    </p>
                    <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary mt-2" id="id_saveBtn">저장</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Write;
