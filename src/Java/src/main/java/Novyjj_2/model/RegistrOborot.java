package Novyjj_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: РегистрОборот
 */
@Entity(name = "IISNovyjj_2РегистрОборот")
@Table(schema = "public", name = "РегистрОборот")
public class RegistrOborot {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PrixodDeneg")
    @Convert("PrixodDeneg")
    @Column(name = "ПриходДенег", length = 16, unique = true, nullable = false)
    private UUID _prixoddenegid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PrixodDeneg", insertable = false, updatable = false)
    private PrixodDeneg prixoddeneg;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RasxodDeneg")
    @Convert("RasxodDeneg")
    @Column(name = "РасходДенег", length = 16, unique = true, nullable = false)
    private UUID _rasxoddenegid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RasxodDeneg", insertable = false, updatable = false)
    private RasxodDeneg rasxoddeneg;


    public RegistrOborot() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}