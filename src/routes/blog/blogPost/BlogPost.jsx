import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import "./BlogPost.scss";
import NotFound from '../../notFound/NotFound.jsx'

export default function BlogPost() {
    const { postId } = useParams();
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!postId) return;
        fetch(`/blogs/${postId}/${postId}.md`)
            .then((res) => {
                if (!res.ok) throw new Error("Blog not found.");
                const contentType = res.headers.get('content-type') || '';
                if (contentType.includes('text/html')) throw new Error('Blog not found.')
                return res.text();
            })
            .then((text) => {
                const isHtml = /^\s*</.test(text) && /<\/html>|<script|<!doctype/i.test(text)
                if (isHtml) throw new Error('Blog not found.')

                setContent(text);
                setError("");
            })
            .catch(() => setError("Blog not found."));
    }, [postId]);

    if (error) {
        return <NotFound />
    }

    return (
        <article className="blog-container">
            {!content ? (
                <h2 className="error">Loading...</h2>
            ) : (
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                    components={{
                        img: ({ node, ...props }) => {
                            const src = props.src || ''
                            const cleaned = src.replace(/^\.+\//, '')
                            const finalSrc = cleaned.startsWith('http') || cleaned.startsWith('/') ? cleaned : `/blogs/${postId}/${cleaned}`
                            return <img src={finalSrc} className="blog-image" alt={props.alt || ''} />
                        },
                        h1: ({ node, ...props }) => <h1 className="md-h1" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="md-h2" {...props} />,
                        p: ({ node, ...props }) => <p className="md-p" {...props} />,
                        a: ({ node, ...props }) => <a className="md-link" {...props} />,
                        ul: ({ node, ...props }) => <ul className="md-ul" {...props} />,
                        ol: ({ node, ...props }) => <ol className="md-ol" {...props} />,
                        code: ({ node, inline, className, children, ...props }) => (
                            <code className={`md-code ${className || ''}`} {...props}>{children}</code>
                        ),
                        blockquote: ({ node, ...props }) => <blockquote className="md-quote" {...props} />,
                        hr: ({ node, ...props }) => <hr className="md-hr" {...props} />,
                    }}
                >
                    {content}
                </ReactMarkdown>
            )}
        </article>
    );
}

